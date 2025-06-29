import React, { useState } from 'react';
import Modal from 'react-modal';
import classNames from 'classnames/bind';

import styles from './UpdatePostModal.module.scss';
import useUpdatePost from '@/hooks/useUpdatePost';

const cx = classNames.bind(styles);

Modal.setAppElement('#root');

interface UpdatePostModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  postId: string;
}

const UpdatePostModal: React.FC<UpdatePostModalProps> = ({
  isOpen,
  onRequestClose,
  postId,
}) => {
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const updatePostMutation = useUpdatePost();

  const handleSubmit = () => {
    if (!description.trim()) {
      setError('Mô tả không được để trống');
      return;
    }

    setError('');
    updatePostMutation.mutate(
      { id: postId, description },
      {
        onSuccess: () => {
          onRequestClose();
        },
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
      <h2 className={cx('modal-title')}>Cập nhật mô tả bài viết</h2>

      <div className={cx('form-group')}>
        <label>
          Mô tả mới <span className={cx('required')}>*</span>
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      {error && <p className={cx('error')}>{error}</p>}

      <div className={cx('button-group')}>
        <button className={cx('submit-btn')} onClick={handleSubmit}>
          Cập nhật
        </button>
        <button className={cx('cancel-btn')} onClick={onRequestClose}>
          Huỷ
        </button>
      </div>
    </Modal>
  );
};

export default UpdatePostModal;
