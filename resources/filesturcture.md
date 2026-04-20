src/
│
├── app/
│ ├── App.jsx
│ ├── main.jsx
│ │
│ ├── providers/
│ │ ├── StoreProvider/
│ │ │ └── index.jsx
│ │ ├── QueryProvider/
│ │ │ └── index.jsx
│ │ ├── ThemeProvider/
│ │ │ ├── ThemeContext.jsx
│ │ │ ├── theme.js
│ │ │ ├── cssVariables.js
│ │ │ └── index.js
│ │ └── index.js
│ │
│ ├── router/
│ │ ├── index.js
│ │ ├── routes.js
│ │ ├── routeConfig.js
│ │ └── lazyRoutes.js
│ │
│ ├── guards/
│ │ ├── AuthGuard.jsx
│ │ ├── RoleGuard.jsx
│ │ ├── PublicGuard.jsx
│ │ └── index.js
│ │
│ ├── layouts/
│ │ ├── MainLayout/
│ │ │ ├── MainLayout.jsx
│ │ │ ├── MainLayout.styles.js
│ │ │ ├── sidebar/
│ │ │ ├── header/
│ │ │ ├── config/
│ │ │ ├── hooks/
│ │ │ └── index.js
│ │ │
│ │ ├── AuthLayout/
│ │ ├── EmptyLayout/
│ │ ├── ErrorLayout.jsx
│ │ └── index.js
│ │
│ └── styles/
│ ├── global.css
│ ├── reset.css
│ ├── variables.css
│ ├── animations.css
│ └── themes/
│ ├── light.css
│ └── dark.css
│
├── store/
│ ├── index.js
│ ├── hooks.js
│ ├── rootReducer.js
│ ├── persist.js
│ │
│ ├── middleware/
│ │ ├── logger.js
│ │ ├── authMiddleware.js
│ │ └── index.js
│ │
│ └── slice/
│ ├── authSlice.js
│ ├── userSlice.js
│ ├── uiSlice.js
│ ├── themeSlice.js
│ └── index.js
│
├── modules/
│ ├── auth/
│ │ ├── pages/
│ │ ├── components/
│ │ ├── hooks/
│ │ ├── services/
│ │ ├── utils/
│ │ └── store/
│ │ ├── auth.selectors.js
│ │ ├── auth.thunks.js
│ │ └── index.js
│ │
│ ├── user/
│ ├── dashboard/
│ ├── settings/
│ └── index.js
│
├── components/
│ ├── ui/
│ │ ├── Button/
│ │ ├── Input/
│ │ ├── Textarea/
│ │ ├── Modal/
│ │ ├── Toast/
│ │ ├── Tooltip/
│ │ ├── Spinner/
│ │ ├── ProgressBar/
│ │ ├── Checkbox/
│ │ ├── Radio/
│ │ ├── Switch/
│ │ ├── FileUpload/
│ │ ├── DateTimePicker/
│ │ └── index.js
│ │
│ ├── composites/
│ ├── shared/
│ │ ├── PageHeader/
│ │ ├── EmptyState/
│ │ ├── ErrorBoundary.jsx
│ │ ├── NotFound.jsx
│ │ └── index.js
│ │
│ └── index.js
│
├── api/
│ ├── client/
│ │ ├── apiClient.js
│ │ ├── interceptors.js
│ │ ├── errorHandler.js
│ │ └── index.js
│ │
│ ├── auth/
│ ├── user/
│ ├── dashboard/
│ ├── upload/
│ └── index.js
│
├── hooks/
│ ├── useToggle.js
│ ├── useDebounce.js
│ ├── useModal.js
│ ├── useFetch.js
│ ├── useLocalStorage.js
│ ├── usePagination.js
│ ├── useAuth.js
│ ├── usePermissions.js
│ └── index.js
│
├── utils/
│ ├── formatters.js
│ ├── validators.js
│ ├── helpers.js
│ ├── constants.js
│ ├── date.js
│ ├── storage.js
│ ├── logger.js
│ └── index.js
│
├── styles/
│ ├── jsTokens/
│ │ ├── colors.js
│ │ ├── spacing.js
│ │ ├── typography.js
│ │ ├── radius.js
│ │ ├── shadows.js
│ │ ├── breakpoints.js
│ │ └── index.js
│ │
│ ├── global.css
│ ├── variables.css
│ ├── animations.css
│ └── themes/
│ ├── light.css
│ └── dark.css
│
├── types/
│ ├── api.js
│ ├── common.js
│ ├── auth.js
│ ├── user.js
│ └── index.js
│
└── assets/
├── images/
├── icons/
├── fonts/
└── videos/
