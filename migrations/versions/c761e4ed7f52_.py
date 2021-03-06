"""empty message

Revision ID: c761e4ed7f52
Revises: b17a03f0d321
Create Date: 2022-05-30 14:00:10.519900

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'c761e4ed7f52'
down_revision = 'b17a03f0d321'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('profile',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('title', sa.String(length=120), nullable=True),
    sa.Column('aboutme', sa.String(length=520), nullable=True),
    sa.Column('howicanhelp', sa.String(length=520), nullable=True),
    sa.Column('services', sa.String(length=520), nullable=True),
    sa.Column('certifications', sa.String(length=520), nullable=True),
    sa.Column('comments', sa.String(length=120), nullable=True),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.drop_table('recipe')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('recipe',
    sa.Column('id', sa.INTEGER(), autoincrement=True, nullable=False),
    sa.Column('title', sa.VARCHAR(length=120), autoincrement=False, nullable=True),
    sa.Column('aboutme', sa.VARCHAR(length=520), autoincrement=False, nullable=True),
    sa.Column('howicanhelp', sa.VARCHAR(length=520), autoincrement=False, nullable=True),
    sa.Column('services', sa.VARCHAR(length=520), autoincrement=False, nullable=True),
    sa.Column('certifications', sa.VARCHAR(length=520), autoincrement=False, nullable=True),
    sa.Column('comments', sa.VARCHAR(length=120), autoincrement=False, nullable=True),
    sa.Column('user_id', sa.INTEGER(), autoincrement=False, nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], name='recipe_user_id_fkey'),
    sa.PrimaryKeyConstraint('id', name='recipe_pkey')
    )
    op.drop_table('profile')
    # ### end Alembic commands ###
