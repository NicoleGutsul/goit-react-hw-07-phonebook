import Contacts from "./Contacts/Contacts";
import Filter from "./Filter/Filter";
import Form from "./Form/Form";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNumbers } from "redux/operations";
import { getError, getIsLoading } from "redux/selectors";

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchNumbers());
  }, [dispatch]);

  return (
    <>
      <Form />
      {isLoading && !error && <b>Request Information</b>}
      {!isLoading && error && <b>Error</b>}
      <Filter />
      <Contacts />
    </>
  );
};
