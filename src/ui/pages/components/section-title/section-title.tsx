import React from 'react';

import styles from './section-title.styles.scss';

type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

export const SectionTitle: React.FC<Props> = ({ children, ...rest }) => (
  <h2 className={styles.sectionTitle} {...rest}>
    {children}
  </h2>
);
