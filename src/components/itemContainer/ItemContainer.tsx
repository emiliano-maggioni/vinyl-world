import classes from "./ItemContainer.module.css";
type Props = {
    // title: string,
    // children: JSX.Element,
    children: any,
  };

const ItemContainer = ({  children }: Props) => {
    return (<section className={classes.container}>
            {children}
        </section>
    );
}

export default ItemContainer;