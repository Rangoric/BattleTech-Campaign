import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { IPerson } from "./IGroup";
import { ClientUrls } from "@/utilities/ClientUrls";

interface IPersonDisplayProps {
  person: IPerson;
}

export const PersonDisplay = ({ person }: IPersonDisplayProps) => {
  return (
    <Card elevation={3} sx={{ width: 320 }}>
      {person.profile && (
        <CardMedia
          component={"img"}
          height={320}
          width={320}
          image={ClientUrls.images(person.profile)}
        />
      )}
      <CardContent>
        <Typography>{person.name}</Typography>
        <Typography>{person.age ? `Age: ${person.age}` : ""}</Typography>
        <Typography>
          {person.title} {person.class}
        </Typography>
        <Typography>{person.job}</Typography>
        {person.description?.map((item) => (
          <Typography key={item}>{item}</Typography>
        ))}
      </CardContent>
    </Card>
  );
};
