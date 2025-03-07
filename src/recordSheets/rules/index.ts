export interface IParticipant {
  character: string;
  unit: string;
}

export const BattleGroup = (...participants: IParticipant[]) => {
  const participantsMap: { [key: string]: IParticipant } = {};
  participants.forEach((participant) => {
    participantsMap[participant.character] = participant;
  });

  return {
    participants: participantsMap,
  };
};
