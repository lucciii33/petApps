"""empty message

Revision ID: f50ebded397e
Revises: a23bd08417b2
Create Date: 2022-06-23 15:12:05.583567

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'f50ebded397e'
down_revision = 'a23bd08417b2'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('user_doctors',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('full_name', sa.String(length=120), nullable=True),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('password', sa.String(length=80), nullable=False),
    sa.Column('is_active', sa.Boolean(), nullable=False),
    sa.Column('phone', sa.String(length=120), nullable=True),
    sa.Column('rating', sa.String(length=120), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    op.drop_table('profile')
    op.add_column('user', sa.Column('first_name', sa.String(length=120), nullable=False))
    op.add_column('user', sa.Column('last_name', sa.String(length=120), nullable=False))
    op.create_unique_constraint(None, 'user', ['last_name'])
    op.create_unique_constraint(None, 'user', ['first_name'])
    op.drop_column('user', 'full_name')
    op.drop_column('user', 'is_active')
    op.drop_column('user', 'rating')
    op.drop_column('user', 'user_type')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('user', sa.Column('user_type', sa.VARCHAR(length=120), autoincrement=False, nullable=True))
    op.add_column('user', sa.Column('rating', sa.VARCHAR(length=120), autoincrement=False, nullable=True))
    op.add_column('user', sa.Column('is_active', sa.BOOLEAN(), autoincrement=False, nullable=False))
    op.add_column('user', sa.Column('full_name', sa.VARCHAR(length=120), autoincrement=False, nullable=True))
    op.drop_constraint(None, 'user', type_='unique')
    op.drop_constraint(None, 'user', type_='unique')
    op.drop_column('user', 'last_name')
    op.drop_column('user', 'first_name')
    op.create_table('profile',
    sa.Column('id', sa.INTEGER(), autoincrement=True, nullable=False),
    sa.Column('title', sa.VARCHAR(length=120), autoincrement=False, nullable=True),
    sa.Column('aboutme', sa.VARCHAR(length=520), autoincrement=False, nullable=True),
    sa.Column('howicanhelp', sa.VARCHAR(length=520), autoincrement=False, nullable=True),
    sa.Column('services', sa.VARCHAR(length=520), autoincrement=False, nullable=True),
    sa.Column('certifications', sa.VARCHAR(length=520), autoincrement=False, nullable=True),
    sa.Column('comments', sa.VARCHAR(length=120), autoincrement=False, nullable=True),
    sa.Column('user_id', sa.INTEGER(), autoincrement=False, nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], name='profile_user_id_fkey'),
    sa.PrimaryKeyConstraint('id', name='profile_pkey')
    )
    op.drop_table('user_doctors')
    # ### end Alembic commands ###