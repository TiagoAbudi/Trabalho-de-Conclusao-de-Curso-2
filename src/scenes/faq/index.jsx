import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Página de perguntas frequentes" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Ana Silva
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Como o SoftdevX pode ajudar a aumentar as vendas da minha empresa?
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Pedro Almeida
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            O SoftdevX é compatível com outros sistemas de gestão empresarial?
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Marina Oliveira
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Quais são os principais recursos oferecidos pelo SoftdevX para
            otimizar o processo de vendas?
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            João Santos
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            É possível personalizar o SoftdevX de acordo com as necessidades
            específicas da minha empresa?
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Carolina Costa
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Como funciona o suporte técnico e a assistência oferecidos pela
            equipe do SoftdevX em caso de problemas ou dúvidas durante a
            utilização?
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
