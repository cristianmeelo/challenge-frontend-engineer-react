interface Company {
  id: string;
  name: string;
}

interface Unit {
  id: string;
  companyId: string;
  name: string;
}

interface User {
  id: string;
  companyId: string;
  unitId: string;
  name: string;
  email: string;
}

interface PageProps {
  params: {
    lang: Locale;
  };
}
