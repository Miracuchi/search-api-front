export default function SearchButton(
  buttonProps: React.ButtonHTMLAttributes<HTMLButtonElement>
) {
  return (
    <button
      type={buttonProps.type}
      onClick={buttonProps.type === "button" ? buttonProps.onClick : undefined}
      className="border bg-[#2ea44f] rounded-md cursor-pointer py-2 px-4 hover:bg-[#2c974b]"
    >
      {buttonProps.title || buttonProps.children}
    </button>
  );
}
