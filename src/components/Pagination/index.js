import { Section, Button } from "./styles";

const Pagination = ({ pages, currentPage, setCurrentPage }) => {
  return (
    <Section>
      {Array.from(Array(pages), (items, index) => {
        return (
          <Button
            key={index}
            ClassName="pagination"
            style={
              index === currentPage
                ? { textDecoration: "underline", fontWeight: "bold" }
                : null
            }
            value={index}
            onClick={(e) => setCurrentPage(Number(e.target.value))}
          >
            {index + 1}
          </Button>
        );
      })}
    </Section>
  );
};

export default Pagination;
