import { AssetsProvider } from './Assets/Assets';
import { CompaniesProvider } from './Companies/Companies';
import { UnitsProvider } from './Units/Units';
import { UsersProvider } from './Users/Users';
import { WorkordersProvider } from './Workorders/Workorders';

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
          <WorkordersProvider language={params.lang}>
<AssetsProvider language={params.lang}>

          {children}
</AssetsProvider>
          </WorkordersProvider>
          </UsersProvider>
      </UnitsProvider>
    </CompaniesProvider>
  );
};
