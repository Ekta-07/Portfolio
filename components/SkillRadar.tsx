const radarData = [
    { group: 'Code and Logic', value: 0.9, tools: 'Python, SQL, Matlab, React' },
    { group: 'Data Systems', value: 0.8, tools: 'Data Pipelines, ETL, Data Architecture' },
    { group: 'Deep Dive', value: 0.95, tools: 'Sensor Data, Image Processing, Simulation, Research' },
    { group: 'Creative Flow', value: 0.85, tools: 'Figma, Procreate, Photoshop' },
    { group: 'Tool Tinkering', value: 0.8, tools: 'AWS, Docker, Git' },
];

const SIDES = radarData.length;
const CX = 200;
const CY = 160;
const R = 110;
const LEVELS = 4;

function angleFor(i: number) {
    return (Math.PI * 2 * i) / SIDES - Math.PI / 2;
}

function pointAt(i: number, scale: number) {
    const a = angleFor(i);
    return { x: CX + Math.cos(a) * R * scale, y: CY + Math.sin(a) * R * scale };
}

function polygonPoints(scale: number) {
    return Array.from({ length: SIDES }, (_, i) => {
        const p = pointAt(i, scale);
        return `${p.x},${p.y}`;
    }).join(' ');
}

const labelOffsets: Record<number, { dx: number; dy: number; anchor: 'start' | 'middle' | 'end' }> = {
    0: { dx: 0, dy: -16, anchor: 'middle' },
    1: { dx: 16, dy: 0, anchor: 'start' },
    2: { dx: 12, dy: 18, anchor: 'start' },
    3: { dx: -12, dy: 18, anchor: 'end' },
    4: { dx: -16, dy: 0, anchor: 'end' },
};

export default function SkillRadar() {
    const dataPolygon = radarData
        .map((d, i) => {
            const p = pointAt(i, d.value);
            return `${p.x},${p.y}`;
        })
        .join(' ');

    return (
        <div>
            <div>
                <h2 className="text-2xl font-bold mb-1">
                    <span className="bg-gradient-to-r from-[#C9D3EE] to-[#818CF8] bg-clip-text text-transparent">Skill Architecture</span>
                </h2>

                <svg viewBox="-10 15 420 270" className="w-full" role="img" aria-label="Skill radar chart">
                    {/* Grid levels */}
                    {Array.from({ length: LEVELS }, (_, l) => {
                        const scale = (l + 1) / LEVELS;
                        return (
                            <polygon
                                key={l}
                                points={polygonPoints(scale)}
                                fill="none"
                                stroke="#727DA1"
                                strokeOpacity={0.15}
                                strokeWidth={1}
                            />
                        );
                    })}

                    {/* Axis lines */}
                    {Array.from({ length: SIDES }, (_, i) => {
                        const p = pointAt(i, 1);
                        return (
                            <line
                                key={i}
                                x1={CX}
                                y1={CY}
                                x2={p.x}
                                y2={p.y}
                                stroke="#727DA1"
                                strokeOpacity={0.15}
                                strokeWidth={1}
                            />
                        );
                    })}

                    {/* Data area */}
                    <polygon
                        points={dataPolygon}
                        fill="rgba(99, 102, 241, 0.15)"
                        stroke="#818CF8"
                        strokeWidth={1.5}
                    />

                    {/* Vertex dots */}
                    {radarData.map((d, i) => {
                        const p = pointAt(i, d.value);
                        return (
                            <circle
                                key={i}
                                cx={p.x}
                                cy={p.y}
                                r={3.5}
                                fill="#171926"
                                stroke="#818CF8"
                                strokeWidth={1.5}
                            />
                        );
                    })}

                    {/* Labels */}
                    {radarData.map((d, i) => {
                        const p = pointAt(i, 1);
                        const offset = labelOffsets[i];
                        return (
                            <text
                                key={i}
                                x={p.x + offset.dx}
                                y={p.y + offset.dy}
                                textAnchor={offset.anchor}
                                dominantBaseline="central"
                                fill="#C9D3EE"
                                style={{ fontSize: '9.5px', fontWeight: 300, fontFamily: 'var(--font-inter), Inter, sans-serif', letterSpacing: '0.02em' }}
                            >
                                {d.group}
                            </text>
                        );
                    })}
                </svg>
            </div>

            {/* Skill Categories */}
            <div className="flex flex-wrap justify-center gap-2 mt-8">
                {radarData.map((d) => (
                    <div key={d.group} className="px-3 py-1.5 rounded-full border border-[#727DA1]/15 bg-[#171926]/50">
                        <span className="text-xs text-[#818CF8] font-medium">{d.group}</span>
                        <span className="text-xs text-[#939DB8]"> · {d.tools}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
