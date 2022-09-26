export function Skill(props) {
    return (
        <dev style="--bgc:var(--primary); --c:var(--text-main); --br:6px; --px:8px; --py:4px; --m:2px; --bxs:border-box; --size:18px">
            {props.skill.name}
        </dev>
    );
}