function DoublyLinkedList() {
    let Node = function (el) {
        this.el = el;
        this.next = null;
        this.prev = null;
    }
    let head = null;
    let tail = null;
    let length = 0;

    this.insert = function (position, el) {
        if (position > -1 && position <= length) {
            let node = new Node(el);
            let current = head;
            let index = 0;
            let previous;
            if (position === 0) {
                if (!head) {
                    head = node;
                    tail = node;
                } else {
                    node.next = current;
                    current.prev = node;
                    head = node;
                }
            } else if (position === length) {
                current = tail;
                current.next = node;
                node.prev = current;
                tail = node;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
                current.prev = node;
                node.prev = previous;
            }
            length++;
            return true;
        }
    }

    this.removeAt = function (position) {
        if (position > -1 && position < length) {
            let current = head;
            let previous;
            let index = 0;

            if (position === 0) {
                head = current.next;
                if (length === 1) {
                    tail = null;
                } else {
                    head.prev = null;
                }
            } else if (position === length - 1) {
                current = tail;
                tail = current.prev;
                tail.next = null;
            }else {
                while(index++<position){
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
                current.next.prev = previous;
            }
            length--;
            return current.el;
        }else{
            return null;
        }
    }
}