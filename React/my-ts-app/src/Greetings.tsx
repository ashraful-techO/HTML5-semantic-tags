type User = {
  id: number;
  name: string;
  age: number;
};

type GreetingProps = {
  user: User;
};

function Greeting({ user }: GreetingProps) {
  return (
    <>
      <h2>Hello, {user.name}! You are {user.age} years old.</h2>
    </>
  );
}

export default Greeting;
