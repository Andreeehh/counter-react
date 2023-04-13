import { Button } from '../../components/Button';
import { Heading } from '../../components/Heading';
import { useCounterContext } from '../../contexts/CounterContext';

export const Home = () => {
  const [state, actions] = useCounterContext();

  const handleError = () => {
    actions
      .asyncError()
      .then((r) => console.log(r))
      .catch((e) => console.log(e.name, ':', e.message));
  };

  return (
    <div>
      <Heading />
      <div>
        <Button onButtonClicked={actions.increase}>Increase</Button>
        <Button onButtonClicked={() => actions.decrease()}>Decrease</Button>
        <Button onButtonClicked={actions.reset}>Reset</Button>
        <Button disabled={state.loading} onButtonClicked={actions.asyncIncrease}>
          Async Increase
        </Button>
      </div>
    </div>
  );
};
