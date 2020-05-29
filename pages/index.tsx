import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import SiteLayout from '../client/layout/SiteLayout/SiteLayout';
import Inner from '../client/components/Inner/Inner';
import { Form, Formik } from 'formik';
import { useCreateUserMutation } from '../client/generated/apolloComponents';
import Title from '../client/components/Title/Title';
import FormikInput from '../client/components/FormElements/Input/FormikInput';
import FormikDropZone from '../client/components/FormElements/Upload/FormikDropZone';
import ButtonPrimary from '../client/components/Buttons/ButtonPrimary';

const Home: NextPage = () => {
  const [crateUserMutation, { data, loading, error }] = useCreateUserMutation();
  const [assets, setAssets] = useState<any>(null);

  useEffect(() => {
    if (data && data.createUser && data.createUser.user) {
      setAssets(data.createUser.user.assets);
    }
  }, [data]);

  console.log('assets', assets);

  return (
    <SiteLayout>
      <Inner>
        <Title>Create user</Title>

        <Formik
          initialValues={{ name: '', images: [] }}
          onSubmit={(values) => {
            return crateUserMutation({
              variables: {
                input: values,
              },
            });
          }}
        >
          {() => {
            return (
              <Form>
                <FormikInput name={'name'} label={'User name'} testId={'user-name'} />
                <FormikDropZone name={'images'} label={'User photos'} testId={'user-images'} />
                <ButtonPrimary type={'submit'} testId={'user-submit'}>
                  Create
                </ButtonPrimary>
              </Form>
            );
          }}
        </Formik>

        <div style={{ marginTop: '2rem' }}>
          {loading && 'Loading...'}
          {error && (
            <>
              <h2>Mutation error</h2>
              <pre>{JSON.stringify(error, null, 4)}</pre>
            </>
          )}
          {data && (
            <div data-cy={`user-success`}>
              <h2>Response</h2>
              <pre>{JSON.stringify(data, null, 4)}</pre>
            </div>
          )}
        </div>
      </Inner>
    </SiteLayout>
  );
};

export default Home;
