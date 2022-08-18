const Mos = (props) => {
  const { title, details } = props;
  const list = details.map((res) => {
    return <li style={{ listStyleType: res.styletype }}>{res.context}</li>;
  });
  return (
    <>
      <h1>{title}</h1>
      <ul>{list}</ul>
    </>
  );
};

export { Mos };
