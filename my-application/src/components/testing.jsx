export const MyComponent = () => {
  const projects = ["Ecommerce App", "Blog App"];

  const myFunction = () => {
    console.log("Hello World!");
  };

  const renderMyProjects = () => {
    return projects.map((project) => <li>{project}</li>);
  };

  return (
    <div>
      <h1>Welcome</h1>
      <h3>Welcome</h3>
      <ul>{renderMyProjects()}</ul>
    </div>
  );
};
