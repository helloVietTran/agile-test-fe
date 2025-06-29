import { FaTrash } from "react-icons/fa";
import { LuPencil } from "react-icons/lu";
import classNames from "classnames/bind";
import { useState, useEffect } from "react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { ClipLoader } from "react-spinners";

import Table from "@/components/Table/Table";
import Button from "@/components/Button/Button";
import styles from "./PostList.module.scss";
import Input from "@/components/Input/Input";
import { useTags } from "@/hooks/useTags";
import { usePosts } from "@/hooks/usePosts";
import { useDeletePost } from "@/hooks/useDeletePost";
import CreatePostModal from "@/components/CreatePostModal/CreatePostModal";
import UpdatePostModal from "@/components/UpdatePostModal/UpdatePostModal";

const cx = classNames.bind(styles);

const PostList = () => {
    const [title, setTitle] = useState('');
    const [debouncedTitle, setDebouncedTitle] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [isCreateOpen, setIsCreateOpen] = useState(false);

    const { data: tags } = useTags();
    const { data: posts } = usePosts({ title: debouncedTitle, page: currentPage });
    const deletePostMutation = useDeletePost();

    const [isUpdateOpen, setIsUpdateOpen] = useState(false);
    const [selectedPostId, setSelectedPostId] = useState<string>('');

    // Debounce search input
    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebouncedTitle(title);
            setCurrentPage(1);
        }, 500);
        return () => clearTimeout(timeout);
    }, [title]);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const handleDelete = (postId: string) => {
        confirmAlert({
            customUI: ({ onClose }) => (
                <div className={cx('modal-content')}>
                    <h3 className={cx('modal-title')}>Xác nhận xoá</h3>
                    <p className={cx('modal-message')}>
                        Bạn có chắc chắn muốn xoá bài viết này?
                    </p>
                    <div className={cx('button-group')}>
                        <button
                            className={cx('confirm-btn')}
                            onClick={() => {
                                deletePostMutation.mutate(postId);
                                onClose();
                            }}
                        >
                            Có
                        </button>
                        <button className={cx('cancel-btn')} onClick={onClose}>
                            Không
                        </button>
                    </div>
                </div>
            )
        });
    };

    const handleEdit = (postId: string) => {
        setSelectedPostId(postId);
        setIsUpdateOpen(true);
    };


    if (!posts) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', padding: '40px' }}>
                <ClipLoader size={40} color="#36d7b7" />
            </div>
        );
    }

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            render: (_: any, __: any, index: number) => (
                <span>{(posts.current_page - 1) * 10 + index + 1}</span>
            ),
        },
        { title: 'Title', dataIndex: 'title' },
        { title: 'Description', dataIndex: 'description' },
        {
            title: 'Tags',
            dataIndex: 'tags',
            render: (tags: string[]) => {
                if (!Array.isArray(tags)) {
                    return <span style={{ color: '#999' }}>No tags</span>;
                }
                return (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                        {tags.map((tag: string, index: number) => (
                            <span key={index}>
                                {typeof tag === 'string' ? tag : JSON.stringify(tag)}
                                {index < tags.length - 1 && ','}
                            </span>
                        ))}
                    </div>
                );
            },
        },
        {
            title: 'Actions',
            dataIndex: 'id',
            render: (postId: string) => (
                <>
                    <LuPencil style={{ marginRight: 24, cursor: 'pointer' }} onClick={() => handleEdit(postId)} />
                    <FaTrash
                        style={{ cursor: 'pointer' }}
                        size={15}
                        onClick={() => handleDelete(postId)}
                    />
                </>
            ),
        },
    ];

    return (
        <>
            <div className={cx('table-controls')}>
                <Button
                    variant="secondary" style={{ width: "180px", height: "54px" }}
                    onClick={() => setIsCreateOpen(true)}
                >
                    Add new
                </Button>

                <div className={cx('filter-section')}>
                    <Input
                        placeholder="Title"
                        style={{ height: "48px", width: "240px" }}
                        onChange={handleSearch}
                        value={title}
                    />

                    <div className={cx('select-wrapper')}>
                        <select className={cx('select')}>
                            <option value="">Chọn Tag</option>
                            {tags?.map((tag) => (
                                <option key={tag.toLowerCase()} value={tag.toLowerCase()}>
                                    {tag}
                                </option>
                            ))}
                        </select>

                        <img className={cx('select-icon')} src="/assets/down-icon.png" />
                    </div>
                </div>
            </div>

            <Table
                columns={columns}
                data={posts.posts}
                pagination={{
                    currentPage: posts.current_page,
                    totalPage: posts.total_page,
                }}
                onPageChange={handlePageChange}
            />

            <CreatePostModal
                isOpen={isCreateOpen}
                onRequestClose={() => setIsCreateOpen(false)}

            />

            <UpdatePostModal
                isOpen={isUpdateOpen}
                onRequestClose={() => setIsUpdateOpen(false)}
                postId={selectedPostId}
            />
        </>
    );
};

export default PostList;
