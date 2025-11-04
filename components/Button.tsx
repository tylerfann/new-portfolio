const Button = ({ text, href }) => {
  return (
    <button className="mr-10 px-5 py-2 rounded border">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        >
        {text}
      </a>
    </button>
  );
};

export default Button;
