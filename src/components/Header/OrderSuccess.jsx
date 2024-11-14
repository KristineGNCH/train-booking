import Navigator from "./Nav";
import "../OrderSuccess/OrderSuccess.css"

export default function SuccesOrderHeader() {
  return (
    <header className="header-orderEnd">
      <Navigator />
      <div className="header-orderEnd__thanks container">
      <h1 className="header-orderEnd__title">Благодарим Вас за заказ!</h1>
      </div>
    </header>
  );
}
