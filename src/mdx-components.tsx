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
import { Mermaid } from "mdx-mermaid/lib/Mermaid";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: ({ ref, children, ...props }) => (
      <Link {...props} component={NextLink}>
        {children}
      </Link>
    ),
    code: ({ ...props }) => <Typography variant={"overline"} {...props} />,
    h1: ({ children }) => <Typography variant="h1">{children}</Typography>,
    h2: ({ children }) => <Typography variant="h2">{children}</Typography>,
    h3: ({ children }) => <Typography variant="h3">{children}</Typography>,
    h4: ({ children }) => <Typography variant="h4">{children}</Typography>,
    h5: ({ children }) => <Typography variant="h5">{children}</Typography>,
    h6: ({ children }) => <Typography variant="h6">{children}</Typography>,
    p: ({ ref, ...props }) => <Typography {...props} />,
    ul: ({ ref, ...props }) => <List component={"ul"} {...props} dense />,
    ol: ({ ref, ...props }) => <List component={"ol"} {...props} dense />,
    li: ({ ref, children, ...props }) => (
      <ListItem {...props}>
        <ListItemText primary={children} />
      </ListItem>
    ),
    table: ({ ref, children, ...props }) => (
      <TableContainer>
        <Table {...props} size={"small"}>
          {children}
        </Table>
      </TableContainer>
    ),
    thead: ({ ref, children, ...props }) => (
      <TableHead {...props}>{children}</TableHead>
    ),
    tbody: ({ ref, children, ...props }) => (
      <TableBody {...props}>{children}</TableBody>
    ),
    tr: ({ ref, children, ...props }) => (
      <TableRow {...props}>{children}</TableRow>
    ),
    th: ({ ref, children, ...props }) => (
      <TableCell {...props}>{children}</TableCell>
    ),
    td: ({ ref, children, ...props }) => (
      <TableCell {...props}>{children}</TableCell>
    ),
    mermaid: Mermaid,
    Mermaid,
    ...components,
  };
}
