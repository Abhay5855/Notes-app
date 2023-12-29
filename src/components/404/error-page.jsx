import { useRouteError } from "react-router-dom";
import "./errorpage.css";
import errorLogo from "../../assets/images/404.svg";
import { NavLink } from "react-router-dom";
export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div>
      <div id='error-page'>
        {error.status === 404 ? (
          <>
            <img src={errorLogo} alt='404' />

            <div className='error__link'>
              <NavLink to='/'>
                <div className='error__content'>
                  <span class='material-symbols-outlined'>arrow_left_alt</span>
                  <p>Go back to login</p>
                </div>
              </NavLink>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
