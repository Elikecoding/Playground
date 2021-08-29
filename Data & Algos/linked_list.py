class Node:
    # An object for sorting a single node into a linked list
    # has to attributes the node the data contains and the next node
    data = None
    next_node = None

    def __init__(self, data):
        self.data = data

    def __repr__(self):
        return "<Node data: %s>" % self.data

# N1 = Node(10)
# N1
# <Node data: 10>
# N2 = Node(20)
# N1.next_node = N2


class LinkedList:
    # Singly linked list
    def __init__(self):
        self.head = None

    def is_empty(self):
        return self.head == None

    def size(self):
        # Returns the number of node in the list in O(n) time
        current = self.head
        count = 0

        while current:
            count += 1
            current = current.next_node
        return count

# l = LinkedList()
# N1 = Node(10)
# l.head = N1
# l.size()

    def add(self, data):
        # Adds a new Node containing data at the head of the list
        # This operation is performed in O(1) time - Best case scenario
        new_node = Node(data)
        new_node.next_node = self.head
        self.head = new_node

# l = LinkedList()
# l.add(1)
# l.size()

    def search(self, key):
        # search for the first node containing data that matches the key it returns node if not found
        # runs in O(n) - worse case
        current = self.head

        while current:
            if current.data == key:
                return current
            else:
                current = current.next_node
        return None

# l = LinkedList()
# l.add(1)
# l.add(2)
# l.add(3)
# l.add(34)
# n = l.search(34)
# n
# l

    def insert(self, data, index):
        # inserts new node containing data at index postion in O(1) Time
        # Searching for the index postion is a O(n) operation overall O(n) Time operation
        if index == 0:
            self.add(data)

        if index > 0:
            new = Node(data)

            postion = index
            current = self.head

            while postion > 1:
                current = Node.next_node
                postion -= 1

            prev_node = current
            next_node = current.next_node

            prev_node.next_node = new
            new.next_node = next_node

    def remove_node(self, key):
        # removes node contain data that matches the key
        # return none if key not found, takes O(n) worst case
        current = self.head
        previous = None
        found = False

        while current and not found:
            if current.data == key and current is self.head:
                found = True
                self.head = current.next_node
            elif current.data == key:
                found = True
                previous.next_node = current.next_node
            else:
                previous = current
                current = current.next_node

    def node_at_index(self, index):
        if index == 0:
            return self.head
        else:
            current = self.head
            postion = 0

            while postion < index:
                current = current.next_node
                postion += 1

            return current

    def __repr__(self):
        # Returns a string representation of the list in O(n) time
        nodes = []
        current = self.head

        while current:
            if current is self.head:
                nodes.append("[Head: %s]" % current.data)
            elif current.next_node is None:
                nodes.append("[Tail: %s]" % current.data)
            else:
                nodes.append("[%s]" % current.data)
            current = current.next_node
        return '->'.join(nodes)

# l = LinkedList()
# l.add(1)
# l.add(2)
# l.add(3)
# l
