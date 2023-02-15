import { Entity } from "../../core/Entity";

interface IInvoice {
  orderId: string;
  createdAt: Date;
}

export class Invoice extends Entity<IInvoice> {
  get orderId() {
    return this.props.orderId;
  }

  get createdAt() {
    return this.props.createdAt;
  }

  static create(props: IInvoice) {
    const invoice = new Invoice(props);

    return invoice;
  }
}
