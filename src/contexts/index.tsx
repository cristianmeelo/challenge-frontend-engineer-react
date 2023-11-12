import { CompaniesProvider } from './Companies/Companies';
import { UnitsProvider } from './Units/Units';
import { UsersProvider } from './Users/Users';

export const AppProvider = ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) => {
  return (
    <CompaniesProvider language={params.lang}>
      <UnitsProvider language={params.lang}>
      <UsersProvider language={params.lang}>
        {children}
        </UsersProvider>
        </UnitsProvider>
    </CompaniesProvider>
  );
};
