import { Container, Filler, Label } from './ScoreBar.styled';

const ScoreBar = ({ score }) => {
  const percent = (score * 360) / 100;

  return (
    <Container>
      <Filler
        style={{
          background: `conic-gradient(#00d1ff ${percent}deg, #c8c5c59e 0deg)`,
        }}
      >
        <Label>{`${score}%`}</Label>
      </Filler>
    </Container>
  );
};

export default ScoreBar;
