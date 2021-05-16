import { makeStyles } from '@material-ui/core/styles';

export const boxStyles = makeStyles((theme) => ({
    box: {
        border: "1px solid rgba(63, 81, 181, 0.5)",
        borderRadius: "3px",
        padding: "10px",
        marginTop: "10px",
        marginBottom: "10px",
        color: "#3f51b5",
        fontWeight: "500",
        fontSize: "0.875rem",
        lineHeight: 1.75,
        maxHeight: "320px",
        whiteSpace: "pre-line"
    },
  }));