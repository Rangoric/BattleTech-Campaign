import {
  Link,
  Typography,
  List,
  ListItem,
  ListItemText,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import type { MDXComponents } from "mdx/types";
import NextLink from "next/link";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: ({ children, href }) => (
      <Link href={href!} component={NextLink}>
        {children}
      </Link>
    ),
    code: ({ children }) => (
      <Typography variant={"overline"}>{children}</Typography>
    ),
    h1: ({ children }) => <Typography variant="h1">{children}</Typography>,
    h2: ({ children }) => <Typography variant="h2">{children}</Typography>,
    h3: ({ children }) => <Typography variant="h3">{children}</Typography>,
    h4: ({ children }) => <Typography variant="h4">{children}</Typography>,
    h5: ({ children }) => <Typography variant="h5">{children}</Typography>,
    h6: ({ children }) => <Typography variant="h6">{children}</Typography>,
    p: ({ children }) => <Typography>{children}</Typography>,
    ul: ({ children }) => (
      <List component={"ul"} dense>
        {children}
      </List>
    ),
    ol: ({ children }) => (
      <List component={"ol"} dense>
        {children}
      </List>
    ),
    li: ({ children }) => (
      <ListItem>
        <ListItemText primary={children} />
      </ListItem>
    ),
    table: ({ children }) => (
      <TableContainer>
        <Table size={"small"}>{children}</Table>
      </TableContainer>
    ),
    thead: ({ children }) => <TableHead>{children}</TableHead>,
    tbody: ({ children }) => <TableBody>{children}</TableBody>,
    tr: ({ children }) => <TableRow>{children}</TableRow>,
    th: ({ children }) => <TableCell>{children}</TableCell>,
    td: ({ children }) => <TableCell>{children}</TableCell>,
    ...components,
  };
}
