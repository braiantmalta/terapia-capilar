import { ReactNode } from 'react';
import { Wrapper } from '@components/htmlTags/div';
import { Header } from './header';

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
};
