## 1. Environment & Auth Utilities Setup
- [x] 1.1 Create `.env.local` and `.env.example` with `APP_ACCESS_PASSCODE` and `AUTH_SECRET_KEY`
- [x] 1.2 Implement server-side auth verification helper and secure token signing

## 2. Server API & Middleware Gatekeeper
- [x] 2.1 Implement Next.js `middleware.ts` to protect `/` and private assets from unauthenticated traffic
- [x] 2.2 Implement `src/app/api/auth/route.ts` for credential validation and setting HttpOnly cookie
- [x] 2.3 Implement `src/app/api/auth/logout/route.ts` for clearing the session cookie

## 3. Isolated UI & Sign Out Control
- [x] 3.1 Build isolated, premium `/login` page with passcode input and loading/error states
- [x] 3.2 Add a discreet "Lock / Sign Out" button to `Masthead` or `Footer` with session termination
- [x] 3.3 Test login, session persistence, logout flow, and invalid passcode rejection
