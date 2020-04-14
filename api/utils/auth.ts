import { AuthenticationError } from 'apollo-server-micro';
import User from '../models/user';
import { Request, UserInterface } from '../types';

const signedIn = (req: Request) => {
  return req.session && req.session.userId;
};

export const attemptSignIn = async (
  email: UserInterface['email'],
  password: UserInterface['password'],
) => {
  const emailErrorMessage = 'Пользователь с указанным email не найден';
  const passwordErrorMessage = 'Введён неправильный пароль';

  const user = await User.findOne({ email });

  if (!user) {
    return {
      user: null,
      message: emailErrorMessage,
    };
  }

  if (!(await user.matchesPassword(password))) {
    return {
      user: null,
      message: passwordErrorMessage,
    };
  }

  return {
    user,
    message: `Здравствуйте ${user.name}! Рады Вас снова видеть.`,
  };
};

export const ensureSignedIn = (req: Request) => {
  if (!signedIn(req)) {
    throw new AuthenticationError('Вы не авторизованы.');
  }
};

export const ensureSignedOut = (req: Request) => {
  if (signedIn(req)) {
    throw new AuthenticationError('Вы уже авторизованы.');
  }
};

export const attemptSignOut = (req: Request) => {
  if (req.session && req.session.destroy) {
    req.session.destroy();
    return true;
  }

  return false;
};
