interface HabitProps {
  completed: number;
}

export default function Habit(props: HabitProps) {
  return <p className="text-red-500">{props.completed}</p>;
}
