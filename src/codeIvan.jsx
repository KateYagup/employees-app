const EmployeesList = () => {
  const [searchParams] = useSearchParams();
  const { data: employeesList } = useSelector(state => state.employees);

  const filteredEmployees = useMemo(() => {
    const { position: positionQuery, searchText, sortBy } = Object.fromEntries(searchParams);

    const filteredData = employeesList.filter(
      ({ position, name, tag, email }) =>
        (!positionQuery || position.toLowerCase() === positionQuery.toLowerCase()) &&
        (!searchText ||
          [name, tag, email].some(field =>
            field?.toString().toLowerCase().includes(searchText.toLowerCase()),
          )),
    );

    return sortBy ? filteredData.sort((a, b) => a.birthDate - b.birthDate) : filteredData;
  }, [searchParams, employeesList]);

  return (
    <ul className="employees-list">
      {filteredEmployees.map((employeeData, i) => (
        <EmployeeCard
          key={employeeData.id}
          employeeData={employeeData}
          filteredEmployees={filteredEmployees}
          i={i}
        />
      ))}
    </ul>
  );
};
