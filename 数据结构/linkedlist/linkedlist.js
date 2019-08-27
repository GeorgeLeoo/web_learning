function LinkedList() {
    let Node = function (el) {
        this.el = el;
        this.next = null;
    }

    let length = 0;
    let head = null;

    this.append = function (el) {
        let node = new Node(el);
        let current;

        if (head === null) {
            head = node;
        } else {
            current = head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        length++;
    }

    this.insert = function (position, el) {
        if (position > -1 && position <= length) {
            let node = new Node(el);
            let current = head;
            let previous;
            let index = 0;
            if (position === 0) {
                node.next = current;
                head = node;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
            }
            length++;
            return true;
        } else {
            return false;
        }
    }

    this.removeAt = function (position) {
        if (position > -1 && position < length) {
            let current = head;
            let previous;
            let index = 0;
            if (position === 0) {
                head = current.next;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
            }
            length--;
            return current.el;
        } else {
            return null;
        }
    }

    this.remove = function (el) {
        let index = this.indexOf(el);
        return this.removeAt(index);
    }

    this.indexOf = function (el) {
        let current = head;
        let index=0;
        while(current){
            if(el === current.el){
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    }

    this.isEmpty = function () {
        return length === 0;
    }

    this.getSize = function () {
        return length;
    }

    this.getHead = function () {
        return head;
    }

    this.toString = function () {
        let current = head;
        let str = '';
        while (current) {
            str += current.el + (current.next ? 'n' : '');
            current = current.next;
        }
        return str;
    }

    this.print = function () {

    }
}

