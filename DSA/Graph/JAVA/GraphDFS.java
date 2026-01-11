import java.util.*;

class GraphDFS {
    private int vertices;
    private List<List<Integer>> adjList;

    public GraphDFS(int vertices) {
        this.vertices = vertices;
        adjList = new ArrayList<>();
        for (int i = 0; i < vertices; i++) {
            adjList.add(new ArrayList<>());
        }
    }

    public void addEdge(int src, int dest) {
        adjList.get(src).add(dest);
        adjList.get(dest).add(src);
    }

    public void DFS(int start) {
        boolean[] visited = new boolean[vertices];
        dfsHelper(start, visited);
    }

    private void dfsHelper(int vertex, boolean[] visited) {
        visited[vertex] = true;
        System.out.print(vertex + " ");
        for (int neighbor : adjList.get(vertex)) {
            if (!visited[neighbor]) {
                dfsHelper(neighbor, visited);
            }
        }
    }

    public static void main(String[] args) {
        GraphDFS g = new GraphDFS(5);
        g.addEdge(0, 1);
        g.addEdge(0, 4);
        g.addEdge(1, 2);
        g.addEdge(1, 3);
        g.addEdge(1, 4);
        g.addEdge(2, 3);
        g.addEdge(3, 4);

        System.out.print("DFS Traversal: ");
        g.DFS(0);
    }
}
