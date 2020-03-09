export class Task {

    constructor(
        private taskId?: String,
        private title?: String,
        private studentId?: String,
        private dateAdded?: Date,
        private completedAt?: Date,
        private completed?: Boolean
    ) {

    }

}
