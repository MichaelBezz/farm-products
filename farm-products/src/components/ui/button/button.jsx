import {forwardRef} from "react";
import {StyledButton} from './styles';

const Button = forwardRef(
  ({ children, minWidth, link, className, onClick, ...props }, ref) => {
    return (
      <StyledButton
        className={className}
        ref={ref}
        $minWidth={minWidth}
        {...(link ? {to: link} : {as: "button", onClick, type: "button"})}
        {...props}
      >
        {children}
      </StyledButton>
    );
  }
);

export default Button;
