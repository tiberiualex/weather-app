type LoadingScreenPops = {
  loadingMessage: string;
};

export const LoadingScreen = ({ loadingMessage }: LoadingScreenPops) => (
  <h1>{loadingMessage}</h1>
);
