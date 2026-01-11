import java.util.ArrayList;

class MinHeap {
    private ArrayList<Integer> data;

    public MinHeap() {
        this.data = new ArrayList<>();
    }

    private int getParentIndex(int index) {
        return (index - 1) / 2;
    }

    private int getLeftIndex(int index) {
        return 2 * index + 1;
    }

    private int getRightIndex(int index) {
        return 2 * index + 2;
    }

    private boolean hasParent(int index) {
        return getParentIndex(index) >= 0;
    }

    private boolean hasLeft(int index) {
        return getLeftIndex(index) < data.size();
    }

    private boolean hasRight(int index) {
        return getRightIndex(index) < data.size();
    }

    private void swap(int i, int j) {
        int temp = data.get(i);
        data.set(i, data.get(j));
        data.set(j, temp);
    }

    public void insert(int value) {
        data.add(value);
        heapifyUp();
        System.out.println("Inserted successfully: " + data);
    }

    private void heapifyUp() {
        int index = data.size() - 1;
        while (hasParent(index) && data.get(index) < data.get(getParentIndex(index))) {
            swap(index, getParentIndex(index));
            index = getParentIndex(index);
        }
    }

    public Integer delete() {
        if (data.isEmpty()) return null;
        if (data.size() == 1) return data.remove(0);

        int root = data.get(0);
        data.set(0, data.remove(data.size() - 1));
        heapifyDown();
        System.out.println("Deleted successfully: " + root);
        return root;
    }

    private void heapifyDown() {
        int index = 0;
        while (true) {
            int smallest = index;
            int left = getLeftIndex(index);
            int right = getRightIndex(index);

            if (hasLeft(index) && data.get(left) < data.get(smallest)) {
                smallest = left;
            }

            if (hasRight(index) && data.get(right) < data.get(smallest)) {
                smallest = right;
            }

            if (smallest == index) break;

            swap(index, smallest);
            index = smallest;
        }
    }

    public void printHeap() {
        System.out.println("Heap: " + data);
    }

    public static void main(String[] args) {
        MinHeap heap = new MinHeap();
        heap.insert(10);
        heap.insert(2);
        heap.insert(3);
        heap.insert(7);
        heap.insert(9);
        heap.insert(4);
        heap.insert(0);

        heap.printHeap();

        heap.delete();
        heap.printHeap();

        System.out.println(heap.hasLeft(0));  // true
        System.out.println(heap.hasRight(1)); // true

        heap.insert(10);
        heap.printHeap();
    }
}
