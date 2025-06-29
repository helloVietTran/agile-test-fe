import React, { useState } from 'react';
import Modal from 'react-modal';
import classNames from 'classnames/bind';

import styles from './CreatePostModal.module.scss';
import { useCreatePost } from '@/hooks/useCreatPost';

const cx = classNames.bind(styles);

// Cấu hình root element cho react-modal
Modal.setAppElement('#root');

interface CreatePostModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

const CreatePostModal: React.FC<CreatePostModalProps> = ({ isOpen, onRequestClose }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [tagsInput, setTagsInput] = useState('');
    const [error, setError] = useState('');

    const createPostMutation = useCreatePost();

    const handleSubmit = () => {
        const tags = tagsInput
            .split(',')
            .map(tag => tag.trim())
            .filter(Boolean);

        if (!title || !description || tags.length === 0) {
            setError('Vui lòng nhập đầy đủ tiêu đề, mô tả và ít nhất 1 tag');
            return;
        }

        setError('');
        createPostMutation.mutate(
            { title, description, tags },
            {
                onSuccess: () => {
                    // Reset form và đóng modal khi thành công
                    setTitle('');
                    setDescription('');
                    setTagsInput('');
                    onRequestClose();
                }
            }
        );
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className={cx('modal')}
            overlayClassName={cx('overlay')}
        >
            <h2 className={cx('modal-title')}>Tạo bài viết mới</h2>

            <div className={cx('form-group')}>
                <label>
                    Tiêu đề <span className={cx('required')}>*</span>
                </label>
                <input value={title} onChange={e => setTitle(e.target.value)} />
            </div>

            <div className={cx('form-group')}>
                <label>
                    Mô tả <span className={cx('required')}>*</span>
                </label>
                <textarea value={description} onChange={e => setDescription(e.target.value)} />
            </div>

            <div className={cx('form-group')}>
                <label>
                    Tags (phân cách bằng dấu phẩy) <span className={cx('required')}>*</span>
                </label>
                <input value={tagsInput} onChange={e => setTagsInput(e.target.value)} />
            </div>

            {error && <p className={cx('error')}>{error}</p>}

            <div className={cx('button-group')}>
                <button className={cx('submit-btn')} onClick={handleSubmit}>
                    Tạo
                </button>
                <button className={cx('cancel-btn')} onClick={onRequestClose}>
                    Huỷ
                </button>
            </div>
        </Modal>
    );
};

export default CreatePostModal;
