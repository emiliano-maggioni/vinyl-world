import classes from "./ItemContainer.module.css";
type Props = {
    children: React.ReactNode,
};

const ItemContainer = ({  children }: Props) => {
    return (<section className={classes.container}>
                {children}
            </section>
    );
}

export default ItemContainer;