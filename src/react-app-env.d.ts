/// <reference types="react-scripts" />
type SFC<P> = StatelessComponent<P>;
interface StatelessComponent<P> {
  (props: P & { children?: ReactNode }, context?: any): ReactElement<any>;
  propTypes?: ValidationMap<P>;
  contextTypes?: ValidationMap<any>;
  defaultProps?: Partial<P>;
  displayName?: string;
}