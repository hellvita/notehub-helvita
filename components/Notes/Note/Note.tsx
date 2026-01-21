import ButtonLink from "@/components/parts/ButtonLink/ButtonLink";
import TagLabel from "./TagLabel/TagLabel";
import EditButton from "./EditButton/EditButton";

export default function Note() {
  return (
    <div>
      <h2>title</h2>
      <p>description</p>
      <div>
        <div>
          <EditButton />
          <TagLabel tagName="Shopping" />
        </div>
        <ButtonLink text="View details" />
      </div>
    </div>
  );
}
