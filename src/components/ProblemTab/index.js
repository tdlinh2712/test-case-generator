import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
const ProblemTab = () => {
  return (
    <div>
      <Container>
        <Typography color="textPrimary" variant="h6">
          Problem
        </Typography>{" "}
        This assignment involves extension to the single source-single
        destination shortest path problem. <br></br>
        The input is constructed as follows
        <List dense="true">
          <ListItem>
            <ListItemIcon>
              <ChevronRightIcon />
            </ListItemIcon>{" "}
            <Box fontStyle="italic">
              Two integers: nVertices and nEdges, the number of vertices and
              edges in the graph.
            </Box>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ChevronRightIcon />
            </ListItemIcon>{" "}
            <Box fontStyle="italic">
              nVertices triples consisting of the label and the x‐ and
              y‐coordinates of each vertex. (An int followed by two doubles)
            </Box>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ChevronRightIcon />
            </ListItemIcon>
            <Box fontStyle="italic">
              nEdges triples consisting of the labels of the start and end
              vertices of each edge, along with its weight. Note: the weight
              associated with an edge will be greater than or equal to the
              Euclidean distance between its start and end vertices as
              determined by their coordinates. (Two ints followed by a double)
            </Box>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ChevronRightIcon />
            </ListItemIcon>
            <Box fontStyle="italic">
              Two labels, the indicating the start and goal vertices for which
              the paths are required. (Two ints)
            </Box>
          </ListItem>
        </List>
        Your C++ program should:
        <List dense="true">
          <ListItem>
            <ListItemIcon>
              <ChevronRightIcon />
            </ListItemIcon>{" "}
            <Box fontStyle="italic">
              Read an undirected graph from the input to <b>stdin</b>.
            </Box>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ChevronRightIcon />
            </ListItemIcon>{" "}
            <Box fontStyle="italic">
              Find the shortest path between the start and goal vertices
              specified in the file.
            </Box>{" "}
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ChevronRightIcon />
            </ListItemIcon>{" "}
            <Box fontStyle="italic">
              Print out the vertices on the path, in order from start to goal.
            </Box>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ChevronRightIcon />
            </ListItemIcon>{" "}
            <Box fontStyle="italic">Print out the length of this path.</Box>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ChevronRightIcon />
            </ListItemIcon>{" "}
            <Box fontStyle="italic">
              Find the second shortest path between the start and goal vertices
              specified in the input.
            </Box>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ChevronRightIcon />
            </ListItemIcon>{" "}
            <Box fontStyle="italic">
              Print out the vertices on the path, in order from start to goal.
            </Box>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ChevronRightIcon />
            </ListItemIcon>{" "}
            <Box fontStyle="italic">Print out the length of this path. </Box>
          </ListItem>
        </List>
      </Container>
      <Container>
        <Box>
          <Typography color="textPrimary" variant="h6" gutterBottom={true}>
            Sample test case input
          </Typography>{" "}
          <Button
            variant="outlined"
            color="primary"
            href={
              "https://storage.googleapis.com/test-case-generator/sample_input.txt"
            }
            target="_blank"
            style={{ textTransform: "lowercase" }}
          >
            sample_test_case_input.txt
          </Button>
        </Box>
        <Box>
          <Typography color="textPrimary" variant="h6" gutterBottom={true}>
            Sample test case output
          </Typography>
          <Box
            style={{
              borderColor: "rgba(63, 81, 181, 0.5)",
              color: "#3f51b5",
              fontWeight: "500",
              fontSize: "0.875rem",
              lineHeight: 1.75,
            }}
            px={2}
            pt={1}
            pb={1}
            border={0.1}
            borderRadius={3}
            width={1 / 3}
          >
            <Typography
              display="block"
              color="primary"
              variant="p"
              gutterBottom={true}
            >
              Shortest path from 2 to 13:
            </Typography>
            <Typography
              display="block"
              color="primary"
              variant="p"
              gutterBottom={true}
            >
              Vertices of path: 2--&gt;13{" "}
            </Typography>
            <Typography
              display="block"
              color="primary"
              variant="p"
              gutterBottom={true}
            >
              Length of path: 85{" "}
            </Typography>
            <Typography
              display="block"
              color="primary"
              variant="p"
              gutterBottom={true}
            >
              <br></br>
              Second shortest path from 2 to 13:
            </Typography>

            <Typography
              display="block"
              color="primary"
              variant="p"
              gutterBottom={true}
            >
              Vertices of path: 2--&gt;17--&gt;20--&gt;13{" "}
            </Typography>
            <Typography
              display="block"
              color="primary"
              variant="p"
              gutterBottom={true}
            >
              Length of path: 134{" "}
            </Typography>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default ProblemTab;
