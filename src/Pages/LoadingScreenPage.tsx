import "../Assets/styles/LoadingScreenPage.css"

const LoadingScreen = () => {
  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <p className="loading-text">Loading...</p>
    </div>
  );
};

export default LoadingScreen;