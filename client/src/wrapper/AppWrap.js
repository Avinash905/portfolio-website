import NavigationDots from "../components/NavigationDots";
import SocialMedia from "../components/SocialMedia";

const AppWrap = (Component, id, classname) =>
  function HOC() {
    return (
      <>
        <div id={id} className={`container ${classname}`}>
          <SocialMedia />
          <div className="wrapper flex-center">
            <Component />
          </div>
          <NavigationDots active={id} classname={classname} />
        </div>
      </>
    );
  };

export default AppWrap;
