// next
import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

// project import
import axios from 'utils/axios';

/*
function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomPhoneNumber() {
  const areaCode = getRandomInt(100, 999);
  const centralOfficeCode = getRandomInt(100, 999);
  const lineNumber = getRandomInt(1000, 9999);
  return `${areaCode}-${centralOfficeCode}-${lineNumber}`;
}
*/

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: 'login',
      name: 'login',
      credentials: {
        email: { name: 'email', label: 'Email', type: 'email', placeholder: 'Enter Email' },
        password: { name: 'password', label: 'Password', type: 'password', placeholder: 'Enter Password' }
      },
      async authorize(credentials) {
        try {
          const response = await axios.post('/login', {
            password: credentials?.password,
            email: credentials?.email
          });
          if (response) {
            response.data.user['accessToken'] = response.data.accessToken;
            return response.data.user;
          }
        } catch (e: any) {
          console.error(e);
          const errorMessage = e?.message || e?.response?.data?.message || 'Something went wrong!';
          throw new Error(errorMessage);
        }
      }
    }),
    CredentialsProvider({
      id: 'register',
      name: 'register',
      credentials: {
        firstname: { name: 'firstname', label: 'First Name', type: 'text', placeholder: 'Enter First Name' },
        lastname: { name: 'lastname', label: 'Last Name', type: 'text', placeholder: 'Enter Last Name' },
        email: { name: 'email', label: 'Email', type: 'email', placeholder: 'Enter Email' },
        role: { name: 'role', label: 'role', type: 'text', placeholder: 'Enter role' },
        username: { name: 'username', label: 'Username', type: 'username', placeholder: 'Enter Username' },
        password: { name: 'password', label: 'Password', type: 'password', placeholder: 'Enter Password' },
        phone: { name: 'phone', label: 'Phone Number', type: 'phone', placeholder: 'Enter Phone Number' }
      },
      async authorize(credentials) {
        try {
          const user = await axios.post('/register', {
            firstname: credentials?.firstname,
            lastname: credentials?.lastname,
            role: credentials?.role,
            password: credentials?.password,
            email: credentials?.email,
            username: credentials?.username,
            phone: credentials?.phone
          });

          if (user) {
            user.data.user['accessToken'] = user.data.accessToken;
            return user.data.user;
          }
        } catch (e: any) {
          console.error(e);
          const errorMessage = e?.message || e?.response?.data?.message || 'Something went wrong!';
          throw new Error(errorMessage);
        }
      }
    }),
    CredentialsProvider({
      id: 'changePassword',
      name: 'changePassword',
      credentials: {
        currentPassword: { name: 'password', label: 'Password', type: 'password', placeholder: 'Enter Current Password' },
        newPassword: { name: 'password', label: 'Password', type: 'password', placeholder: 'Enter New Password' }
      },
      async authorize(credentials) {
        try {
          const response = await axios.patch('/users/password', {
            current_password: credentials?.currentPassword,
            new_password: credentials?.newPassword
          });
          if (response) {
            console.log(response);
            response.data.user['accessToken'] = response.data.accessToken;
            return response.data.user;
          }
        } catch (e: any) {
          console.error(e);
          const errorMessage = e?.message || e?.response?.data?.message || 'Something went wrong!';
          throw new Error(errorMessage);
        }
      }
    })
  ],
  callbacks: {
    jwt: async ({ token, user, account }) => {
      if (user) {
        // @ts-ignore
        token.accessToken = user.accessToken;
        token.id = user.id;
        token.provider = account?.provider;
      }
      return token;
    },
    session: ({ session, token }) => {
      if (token) {
        session.id = token.id;
        session.provider = token.provider;
        session.token = token;
      }
      return session;
    }
  },
  session: {
    strategy: 'jwt',
    maxAge: Number(process.env.NEXT_APP_JWT_TIMEOUT!)
  },
  jwt: {
    secret: process.env.NEXT_APP_JWT_SECRET
  },
  pages: {
    signIn: '/login',
    newUser: '/register'
  }
};
