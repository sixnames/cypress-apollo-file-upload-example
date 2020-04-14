import React from 'react';
import { NextPage } from 'next';
import SiteLayout from '../client/layout/SiteLayout/SiteLayout';
import Inner from '../client/components/Inner/Inner';
import { Formik, Form } from 'formik';
import { useCreateUserMutation } from '../client/generated/apolloComponents';
import Title from '../client/components/Title/Title';
import FormikInput from '../client/components/FormElements/Input/FormikInput';
import FormikDropZone from '../client/components/FormElements/Upload/FormikDropZone';
import ButtonPrimary from '../client/components/Buttons/ButtonPrimary';

const Home: NextPage = () => {
  const [crateUserMutation, { data, loading, error }] = useCreateUserMutation();

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
          {error && `Mutation error ${JSON.stringify(error)}`}
          {data && <div data-cy={`user-success`}>Response ${JSON.stringify(data)}</div>}
        </div>
      </Inner>
    </SiteLayout>
  );
};

export default Home;
