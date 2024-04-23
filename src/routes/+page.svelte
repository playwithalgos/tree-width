<script lang="ts">
    const level1 = {
        graph: {
            vertices: [
                { x: 100, y: 100 },
                { x: 200, y: 100 },
                { x: 250, y: 150 },
                { x: 200, y: 200 },
                { x: 100, y: 200 },
            ],
            edges: [
                [4, 0],
                [0, 1],
                [1, 2],
                [2, 3],
                [3, 4],
            ],
        },
        decomposition: {
            nodes: [
                { x: 200, y: 50 },
                { x: 200, y: 200 },
                { x: 200, y: 350 },
            ],
            bags: [[{ i: 0, x: 0, y: 0 }], [], []],
            edges: [
                [0, 1],
                [1, 2],
            ],
        },
        expectedTreeWidth: 2,
    };

    const level2 = {
        graph: {
            vertices: [
                { x: 50, y: 50 },
                { x: 150, y: 50 },
                { x: 250, y: 50 },

                { x: 50, y: 150 },
                { x: 150, y: 150 },
                { x: 250, y: 150 },

                { x: 50, y: 250 },
                { x: 150, y: 250 },
                { x: 250, y: 250 },
            ],
            edges: [
                [0, 1],
                [1, 2],
                [3, 4],
                [4, 5],
                [6, 7],
                [7, 8],
                [0, 3],
                [3, 6],
                [1, 4],
                [4, 7],
                [2, 5],
                [5, 8],
            ],
        },
        decomposition: {
            nodes: [
                { x: 50, y: 50 },
                { x: 50, y: 200 },
                { x: 50, y: 350 },
                { x: 200, y: 350 },
                { x: 200, y: 200 },
                { x: 200, y: 50 },
           
            ],
            bags: [[{ i: 0, x: 0, y: 0 }], [], [], [], [], [], [], [], [], [], [], [], [], []],
            edges: [
                [0, 1],
                [1, 2],
                [2, 3],
                [3, 4],
                [4, 5],
            ],
        },
        expectedTreeWidth: 3,
    };

    let graph;
    let decomposition;
    let expectedTreeWidth;

    function loadLevel(instance) {
        graph = instance.graph;
        decomposition = instance.decomposition;
        expectedTreeWidth = instance.expectedTreeWidth;
    }

    loadLevel(level2);

    function getPositionVertexInBag(node, vertexi: number) {
        const vertex = graph.vertices[vertexi];
        return {
            x: node.x + (vertex.x - 150) / 4,
            y: node.y + (vertex.y - 150) / 4,
        };
    }

    function toggleVertex(inode: number, ivertex: number) {
        function removeVertexFromBag(inode: number, ivertex: number) {
            decomposition.bags[inode] = decomposition.bags[inode].filter(
                (v) => v.i != ivertex,
            );
            decomposition = decomposition;
        }

        function addVertexInBag(inode: number, ivertex: number) {
            decomposition.bags[inode].push({ i: ivertex, x: 0, y: 0 });
        }

        if (decomposition.bags[inode].some((v) => v.i == ivertex))
            removeVertexFromBag(inode, ivertex);
        else addVertexInBag(inode, ivertex);
        decomposition = decomposition;
    }

    function width(decomposition) {
        return Math.max(...decomposition.bags.map((b) => b.length)) - 1;
    }

    function isConstraintAllEdges(decomposition) {
        return graph.edges.every((e) => isEdgeTreated(decomposition, e));
    }

    function isEdgeTreated(decomposition, e) {
        return decomposition.bags.some(
            (b) => b.some((v) => e[0] == v.i) && b.some((v) => e[1] == v.i),
        );
    }

    function isConnected(decomposition, vertexi: number) {
        const S = decomposition.nodes
            .map((v, i) => i)
            .filter((i) => decomposition.bags[i].some((v) => v.i == vertexi));
        console.log(S);
        const visited: boolean[] = [];

        function dfs(i) {
            if (visited[i]) return 0;
            visited[i] = true;
            let sum = 1;

            for (const e of decomposition.edges) {
                if (S.indexOf(e[0]) >= 0 && S.indexOf(e[1]) >= 0)
                    if (e[0] == i || e[1] == i) {
                        sum += dfs(e[0]);
                        sum += dfs(e[1]);
                    }
            }
            return sum;
        }

        if (S.length == 0) return true;

        return dfs(S[0]) == S.length;
    }

        function youwon(decomposition) {
        const constraintConnectivity = graph.vertices
            .map((v, vi) => vi)
            .every((vi) => isConnected(decomposition, vi));
        const constraintEdges = graph.edges.every((e) =>
            isEdgeTreated(decomposition, e),
        );
        return (
            constraintConnectivity &&
            constraintEdges &&
            expectedTreeWidth == width(decomposition)
        );
    }
</script>

<main>
    <h1>Tree-width <button on:click={() => loadLevel(level1)}>Level 1</button><button on:click={() => loadLevel(level2)}>Level 2</button></h1>
    Your mission is find a tree decomposition of tree-width
    <div>{expectedTreeWidth}</div>
    :
    <ul>
        <li>
            Endpoints of each edge should appear in a same bag of the tree
            decomposition.
        </li>
        <li>
            Each bag should contain at most <div>{expectedTreeWidth + 1}</div>
            vertices.
        </li>
        <li>
            The bags containing a given vertex should form a connected component
            in the tree decomposition.
        </li>
    </ul>
    <div
        id="youwon"
        class:youloose={!youwon(decomposition)}
        class:youwon={youwon(decomposition)}
    >
        You won!
    </div>
    <br /><br />
    <div>
        <svg class="graph" width="300" height="300">
            {#each graph.edges as edge, i}
                <line
                    class:good={isEdgeTreated(decomposition, edge)}
                    class:bad={!isEdgeTreated(decomposition, edge)}
                    x1={graph.vertices[edge[0]].x}
                    y1={graph.vertices[edge[0]].y}
                    x2={graph.vertices[edge[1]].x}
                    y2={graph.vertices[edge[1]].y}
                ></line>
            {/each}
            {#each graph.vertices as vertex, index}
                <circle
                    class={"vertex" + index}
                    cx={vertex.x}
                    cy={vertex.y}
                    r="16"
                ></circle>
                <text dominant-baseline="middle" x={vertex.x} y={vertex.y}
                    >{index}</text
                >
            {/each}
        </svg>
    </div>
    <div>
        <svg width="400" height="500">
            {#each decomposition.edges as edge, i}
                <line
                    x1={decomposition.nodes[edge[0]].x}
                    y1={decomposition.nodes[edge[0]].y}
                    x2={decomposition.nodes[edge[1]].x}
                    y2={decomposition.nodes[edge[1]].y}
                ></line>
            {/each}
            {#each decomposition.nodes as node, index}
                <rect
                    class:badnode={decomposition.bags[index].length - 1 >
                        expectedTreeWidth}
                    rx="16"
                    x={node.x - 48}
                    y={node.y - 48}
                    width="96"
                    height="96"
                ></rect>
                {#each graph.vertices as vertex, vertexi}
                    <circle
                        on:click={() => toggleVertex(index, vertexi)}
                        class:bad={!isConnected(decomposition, vertexi) &&
                            decomposition.bags[index].some(
                                (v) => v.i == vertexi,
                            )}
                        class:filigrane={!decomposition.bags[index].some(
                            (v) => v.i == vertexi,
                        )}
                        class={"vertex" + vertexi}
                        cx={getPositionVertexInBag(node, vertexi).x}
                        cy={getPositionVertexInBag(node, vertexi).y}
                        r="10"
                    ></circle>
                    <text
                        dominant-baseline="middle"
                        x={getPositionVertexInBag(node, vertexi).x}
                        y={getPositionVertexInBag(node, vertexi).y}
                        >{vertexi}
                    </text>
                {/each}
            {/each}
        </svg>
    </div>
</main>

<style>
    :global(body) {
        background-color: black;
        color: white;
    }

    line {
        stroke: white;
        stroke-width: 6px;
    }

    circle {
        fill: orange;
        stroke: white;
        stroke-width: 2px;
    }

    rect {
        fill: rgb(52, 52, 87);
        stroke-width: 3px;
        stroke: gray;
    }

    text {
        text-anchor: middle;
        pointer-events: none;
    }

    div {
        display: inline-block;
        vertical-align: top;
        color: white;
    }

    .good {
        color: green;
        stroke: green;
    }

    @keyframes bad {
        0% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }

    .bad {
        stroke: red;
        animation: bad 250ms infinite alternate;
    }

    .badnode {
        stroke: red;
    }

    .vertex0 {
        fill: yellow;
    }

    .vertex1 {
        fill: greenyellow;
    }

    .vertex2 {
        fill: skyblue;
    }

    .vertex3 {
        fill: orange;
    }

    .vertex4 {
        fill: pink;
    }

    .vertex5 {
        fill: burlywood;
    }

    .filigrane {
        opacity: 0.2;
    }

    * {
        transition: all 500ms;
    }

    .youloose {
        opacity: 0;
    }

    .youwon {
        opacity: 1;
        color: green;
        font-size: 64px;
    }
</style>
