import { auth } from './auth';

export default auth((req) => {
    console.log(req.nextUrl.pathname)
});


export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
